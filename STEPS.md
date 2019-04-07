## Step 1 - prepare endpoints

- Add calendar module with configured endpoints
- returned stubbed data from getDay and getCalendar endpoints

## Step 2 - persistence layer setup

- Configure database connection
- Implement event model
- Verify everything works - implement dummy endpoint creating a hardcoded event

## Step 3 - implement endpoint logic

- Handle payload to properly create events
- Return payload from GET endpoints

## Step 4 - implement authentication

- Add passport with github authentication


## Step 5 - implement notification handling

- Implement 'createSubscription' logic
- Implement send notification worker (using Agenda.js) 

# Optional 

- proper secret management
- unit and e2e tests
