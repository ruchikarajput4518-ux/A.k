import { ordersStore, productsStore } from '../utils/storage.js';

export const createOrder = (req, res) => {
  try {
    const {
      name,
      email,
      address,
      city,
      country,
      deliveryMethod = 'white-glove',
      tailoringNotes = '',
      items = []
    } = req.body;

    // Calculate line items and total
    let computedSubtotal = 0;
    const processedItems = items.map(item => {
      const product = productsStore.findById(item.productId || item.product?.id);
      const unitPrice = product ? product.price : (item.price || item.product?.price || 0);
      const qty = Number(item.quantity) || 1;
      const size = item.size || item.selectedSize || 'Standard';
      const itemSubtotal = unitPrice * qty;

      computedSubtotal += itemSubtotal;

      return {
        productId: product ? product.id : (item.productId || item.product?.id),
        name: product ? product.name : (item.name || item.product?.name || 'Bespoke Atelier Piece'),
        size,
        price: unitPrice,
        quantity: qty,
        subtotal: itemSubtotal,
        image: product ? product.image : (item.image || item.product?.image || '/assets/menswear-suit.png')
      };
    });

    // Generate unique luxury order reference code
    const orderId = `RVN-${Math.floor(100000 + Math.random() * 900000)}`;

    const newOrder = {
      id: orderId,
      clientName: name.trim(),
      clientEmail: email.trim().toLowerCase(),
      address: address ? address.trim() : 'Private Residence',
      city: city ? city.trim() : 'London',
      country: country ? country.trim() : 'United Kingdom',
      deliveryMethod,
      tailoringNotes: tailoringNotes ? tailoringNotes.trim() : 'Standard bespoke fitting inspection',
      items: processedItems,
      subtotal: computedSubtotal,
      shippingFee: deliveryMethod === 'white-glove' ? 0 : 150, // Complimentary white-glove courier
      total: computedSubtotal,
      status: 'pending_concierge',
      conciergeAssigned: 'Henri Beaumont (Senior Maitre d\')',
      createdAt: new Date().toISOString()
    };

    ordersStore.insert(newOrder);

    res.status(201).json({
      success: true,
      message: 'Your bespoke commission has been registered with our senior concierge.',
      data: newOrder
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to process bespoke commission', details: err.message }
    });
  }
};

export const getAllOrders = (req, res) => {
  try {
    let orders = ordersStore.getAll();
    const { status, email } = req.query;

    if (status) {
      orders = orders.filter(o => o.status === status);
    }
    if (email) {
      orders = orders.filter(o => o.clientEmail.toLowerCase() === email.toLowerCase());
    }

    res.json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to retrieve orders registry', details: err.message }
    });
  }
};

export const getOrderById = (req, res) => {
  try {
    const { id } = req.params;
    const order = ordersStore.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        error: { message: `Order reference '${id}' not found in private client ledger.` }
      });
    }

    res.json({
      success: true,
      data: order
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Error retrieving order', details: err.message }
    });
  }
};

export const updateOrderStatus = (req, res) => {
  try {
    const { id } = req.params;
    const { status, conciergeAssigned } = req.body;

    const validStatuses = ['pending_concierge', 'in_atelier', 'tailoring_complete', 'dispatched', 'delivered', 'cancelled'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: { message: `Invalid status. Valid statuses: ${validStatuses.join(', ')}` }
      });
    }

    const updates = {};
    if (status) updates.status = status;
    if (conciergeAssigned) updates.conciergeAssigned = conciergeAssigned;

    const updated = ordersStore.update(id, updates);
    if (!updated) {
      return res.status(404).json({
        success: false,
        error: { message: `Order '${id}' not found.` }
      });
    }

    res.json({
      success: true,
      message: 'Order status updated successfully.',
      data: updated
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to update order status', details: err.message }
    });
  }
};
