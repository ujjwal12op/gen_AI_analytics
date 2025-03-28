# Gen AI Analytics Backend Simulation

This project is a lightweight backend service simulating a simplified version of a Gen AI Analytics data query system. The backend processes natural language queries, converts them to pseudo-SQL, and provides simulated responses. It also supports query validation and explanation.

## 🚀 Features
- Natural language query processing
- Pseudo-SQL translation
- Query explanation breakdown
- Query validation check
- Basic API key-based authentication
- Error handling and structured responses

## 🛠️ Tech Stack
- **Node.js**: Server runtime environment
- **Express.js**: Web framework
- **MongoDB**: NoSQL database for data simulation
- **dotenv**: Environment variable management
- **body-parser**: Parsing request bodies
- **Postman**: API testing

## 📝 Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gen-ai-analytics-sim.git
   cd gen-ai-analytics-sim
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```bash
   PORT=3000
   API_KEY=your_api_key
   MONGO_URI=mongodb://localhost:27017/genai
   ```

4. Start the server:
   ```bash
   npm start
   ```

The server will be running at `http://localhost:3000`

## 🔥 API Endpoints
### Authentication
Add an `x-api-key` header with your API key to every request.

### Query Processing
- **Endpoint:** `/api/query`
- **Method:** POST
- **Body:**
  ```json
  {
    "query": "Show me the total sales"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Query processed",
    "query": "Show me the total sales",
    "pseudoSQL": "SELECT SUM(sales) FROM sales_data;"
  }
  ```

### Query Explanation
- **Endpoint:** `/api/explain`
- **Method:** POST
- **Body:**
  ```json
  {
    "query": "Show me the total sales"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Query breakdown",
    "breakdown": "The query 'Show me the total sales' would extract relevant data from the database and return insights."
  }
  ```

### Query Validation
- **Endpoint:** `/api/validate`
- **Method:** POST
- **Body:**
  ```json
  {
    "query": "Show me the total sales"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Query validation",
    "isValid": true
  }
  ```

## 🧪 Testing with Postman
1. Import the provided Postman collection.
2. Set the environment variables (API key).
3. Test the endpoints using the sample requests above.



