# Bug Fix: Add to Cart Adds Wrong Pie

**Date:** 2026-02-05  
**Status:** Fixed  
**Severity:** High

## Problem Description

When clicking "Add to Cart" on a pie, the wrong pie was sometimes added to the cart. Specifically, if there was already a pie in the cart, clicking "Add to Cart" on a different pie would increase the quantity of the existing pie instead of adding the new pie.

## Root Cause

Property name mismatch between `PieCard.jsx` and `CartContext.jsx`:

| Component | Property Sent | Property Expected |
|-----------|---------------|-------------------|
| PieCard.jsx | `pieId` | - |
| CartContext.jsx | - | `pie.id` |

In `PieCard.jsx`, the `handleAddToCart` function was creating an object with `pieId`:
```javascript
const pieItem = {
  pieId: index.toString(),  // ❌ Wrong property name
  name,
  price,
  imageFilename
};
```

In `CartContext.jsx`, the `addToCart` function was looking for `pie.id`:
```javascript
const existingItem = cartItems.find(item => item.pieId === pie.id);  // ❌ pie.id was undefined
```

Since `pie.id` was always `undefined`, the comparison `item.pieId === pie.id` would fail to correctly identify existing items, causing incorrect cart behavior.

## Solution

Changed `PieCard.jsx` to use `id` instead of `pieId` when creating the pie item object:

```javascript
const pieItem = {
  id: index.toString(),  // ✅ Correct property name
  name,
  price,
  imageFilename
};
```

Now `CartContext.addToCart` correctly receives `pie.id` and can properly identify whether a pie already exists in the cart.

## Files Changed

- `src/frontend/components/home/PieCard.jsx` - Changed `pieId` to `id` in the pie item object

## Testing

1. Clear cart
2. Add Pie A to cart - should show quantity 1
3. Add Pie B to cart - should show Pie A (qty 1) and Pie B (qty 1)
4. Add Pie A again - should show Pie A (qty 2) and Pie B (qty 1)
5. Verify correct pies are displayed in cart page

## Lessons Learned

- Ensure consistent property naming between components that share data
- When passing objects between components, verify the expected interface matches
