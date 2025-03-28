const express = require('express');
const router = express.Router();

// /query endpoint
router.post('/query', (req, res, next) => {
  try {
      const { query } = req.body;

      if (!query) {
          const error = new Error('Query is required');
          error.status = 400;
          throw error;
      }

      let pseudoSQL = "SELECT * FROM data;";
      const queryLower = query.toLowerCase();

      if (queryLower.includes("total sales")) {
          pseudoSQL = "SELECT SUM(sales) FROM sales_data;";
      } else if (queryLower.includes("list customers")) {
          pseudoSQL = "SELECT name FROM customers;";
      } else if (queryLower.includes("count orders")) {
          pseudoSQL = "SELECT COUNT(*) FROM orders;";
      } else if (queryLower.includes("average revenue")) {
          pseudoSQL = "SELECT AVG(revenue) FROM financial_data;";
      } else if (queryLower.includes("top products")) {
          pseudoSQL = "SELECT product_name FROM products ORDER BY sales DESC LIMIT 5;";
      } else if (queryLower.includes("employee salaries")) {
          pseudoSQL = "SELECT name, salary FROM employees;";
      }

      res.json({ message: 'Query processed', query: query, pseudoSQL: pseudoSQL });
  } catch (err) {
      next(err);
  }
});



// /explain endpoint
router.post('/explain', (req, res) => {
    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ error: 'Query is required' });
    }

    // Simulated breakdown of the query
    const breakdown = `The query '${query}' would extract relevant data from the database and return insights.`;

    res.json({ message: 'Query breakdown', breakdown: breakdown });
});

// /validate endpoint
router.post('/validate', (req, res) => {
    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ error: 'Query is required' });
    }

    // Simple keyword validation
    const keywords = ["show", "list", "total", "count", "find"];
    const isValid = keywords.some((keyword) => query.toLowerCase().includes(keyword));

    res.json({ message: 'Query validation', isValid: isValid });
});

module.exports = router;
