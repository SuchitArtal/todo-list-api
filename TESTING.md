# API Testing Documentation

## Postman Collection Setup

### Base URL 
`http://localhost:3000/api/todos`

### Endpoints Tested

1. **Create Todo (POST)**
   ```http
   POST /todos
   Content-Type: application/json

   {
     "title": "Test Todo",
     "description": "Testing the todo creation"
   }
   ```
   Expected Response:
   ```json
   {
     "_id": "generated-id",
     "title": "Test Todo",
     "description": "Testing the todo creation",
     "completed": false,
     "createdAt": "timestamp"
   }
   ```

2. **Get All Todos (GET)**
   ```http
   GET /todos
   ```
   Expected Response:
   ```json
   [
     {
       "_id": "todo-id",
       "title": "Todo Title",
       "description": "Todo Description",
       "completed": false,
       "createdAt": "timestamp"
     }
   ]
   ```

3. **Get Single Todo (GET)**
   ```http
   GET /todos/:id
   ```
   Expected Response:
   ```json
   {
     "_id": "requested-id",
     "title": "Todo Title",
     "description": "Todo Description",
     "completed": false,
     "createdAt": "timestamp"
   }
   ```

4. **Update Todo (PUT)**
   ```http
   PUT /todos/:id
   Content-Type: application/json

   {
     "completed": true
   }
   ```
   Expected Response:
   ```json
   {
     "_id": "updated-id",
     "title": "Todo Title",
     "description": "Todo Description",
     "completed": true,
     "createdAt": "timestamp"
   }
   ```

5. **Delete Todo (DELETE)**
   ```http
   DELETE /todos/:id
   ```
   Expected Response: Status 204 (No Content)

## Testing Flow
1. Create new todo
2. Get all todos to verify creation
3. Get single todo using ID
4. Update todo to mark as completed
5. Delete todo
6. Verify deletion by trying to get the deleted todo

## Headers
All requests that send data (POST/PUT) require:
```http
Content-Type: application/json
``` 

## Error Testing Scenarios
1. Create todo with missing required fields
2. Get non-existent todo
3. Update non-existent todo
4. Delete non-existent todo
5. Send invalid JSON in request body

## Common Error Responses
```json
{
  "message": "Todo not found"
}
```

```json
{
  "message": "Title is required"
}
```

```json
{
  "message": "Invalid todo ID"
}
```
