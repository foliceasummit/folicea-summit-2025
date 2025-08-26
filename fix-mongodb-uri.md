# MongoDB URI Fix

## Current (Broken) URI:
```
mongodb+srv://foliceasummit:< 2N@WPC*-VaArwm$>@folicea.gwdfrqm.mongodb.net/?retryWrites=true&w=majority&appName=folicea
```

## Fixed (URL-Encoded) URI:
```
mongodb+srv://foliceasummit:%3C%202N%40WPC%2A-VaArwm%24%3E@folicea.gwdfrqm.mongodb.net/?retryWrites=true&w=majority&appName=folicea
```

## Special Characters Encoded:
- `<` becomes `%3C`
- `>` becomes `%3E`
- ` ` (space) becomes `%20`
- `@` becomes `%40`
- `*` becomes `%2A`
- `$` becomes `%24`

## Steps to Fix:
1. Go to Vercel → Settings → Environment Variables
2. Find MONGODB_URI
3. Replace with the fixed URI above
4. Save
5. Test again
