import { productsStore } from '../utils/storage.js';
import { CATEGORIES, DEPARTMENTS } from '../data/products.data.js';

export const getAllProducts = (req, res) => {
  try {
    let products = productsStore.getAll();
    const { category, department, search, sort, featured, minPrice, maxPrice } = req.query;

    // Filter by department (e.g. menswear, gowns, accessories, leather-goods)
    if (department) {
      products = products.filter(
        p => p.department && p.department.toLowerCase() === department.toLowerCase()
      );
    }

    // Filter by category (e.g. suits, outerwear, shirts, knitwear, gowns, etc.)
    if (category && category !== 'all') {
      products = products.filter(
        p => p.category && p.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by featured
    if (featured === 'true') {
      products = products.filter(p => p.featured === true);
    }

    // Filter by search query
    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
      products = products.filter(
        p =>
          (p.name && p.name.toLowerCase().includes(q)) ||
          (p.description && p.description.toLowerCase().includes(q)) ||
          (p.tag && p.tag.toLowerCase().includes(q)) ||
          (p.fabric && p.fabric.toLowerCase().includes(q))
      );
    }

    // Filter by price range
    if (minPrice) {
      const min = Number(minPrice);
      if (!isNaN(min)) products = products.filter(p => p.price >= min);
    }
    if (maxPrice) {
      const max = Number(maxPrice);
      if (!isNaN(max)) products = products.filter(p => p.price <= max);
    }

    // Sorting
    if (sort === 'price_asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (sort === 'price_desc') {
      products.sort((a, b) => b.price - a.price);
    } else if (sort === 'name_asc') {
      products.sort((a, b) => a.name.localeCompare(b.name));
    }

    res.json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to retrieve products catalogue', details: err.message },
    });
  }
};

export const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    const product = productsStore.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        error: { message: `Luxury item with ID '${id}' not found in atelier registry.` },
      });
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Error retrieving product', details: err.message },
    });
  }
};

export const getMetadata = (req, res) => {
  res.json({
    success: true,
    data: {
      categories: CATEGORIES,
      departments: DEPARTMENTS,
    },
  });
};

export const createProduct = (req, res) => {
  try {
    const { name, category, department, price, description, fabric, origin, fit, sizes, image, tag } = req.body;

    if (!name || !price || !category || !department) {
      return res.status(400).json({
        success: false,
        error: { message: 'Name, price, category, and department are mandatory fields.' },
      });
    }

    const id = req.body.id || `rvn-${Date.now()}`;
    const newProduct = {
      id,
      name,
      category,
      department,
      price: Number(price),
      image: image || '/assets/menswear-suit.png',
      tag: tag || 'Atelier Addition',
      description: description || 'Bespoke atelier creation crafted with exacting standards.',
      fabric: fabric || 'Fine Luxury Materials',
      origin: origin || 'Handcrafted in Europe',
      fit: fit || 'Tailored architectural drape',
      sizes: sizes || ['Standard'],
      stock: req.body.stock !== undefined ? Number(req.body.stock) : 10,
      featured: Boolean(req.body.featured),
      createdAt: new Date().toISOString(),
    };

    productsStore.insert(newProduct);

    res.status(201).json({
      success: true,
      message: 'Luxury item registered in atelier inventory.',
      data: newProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to create product', details: err.message },
    });
  }
};

export const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    const updated = productsStore.update(id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        error: { message: `Product '${id}' not found.` },
      });
    }

    res.json({
      success: true,
      message: 'Product updated successfully.',
      data: updated,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to update product', details: err.message },
    });
  }
};

export const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    const success = productsStore.delete(id);

    if (!success) {
      return res.status(404).json({
        success: false,
        error: { message: `Product '${id}' not found.` },
      });
    }

    res.json({
      success: true,
      message: `Product '${id}' removed from atelier inventory.`,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to delete product', details: err.message },
    });
  }
};
