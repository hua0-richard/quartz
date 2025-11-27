### Method

Splits data based on binary rules. The model predicts based on which region data falls under. Regions can only be split horizontally or vertically.

To build the tree, use a method called [[Recursive Binary Splitting]]

At a high level, we would split the predictor space $(X_1, X_2, ..., X_n)$ into $J$ non-overlapping regions $R_1, R_2, .. R_J$. 
### Regression

In a Regression problem, we would average the points of region $R_i$ for $i \in 1,2, ..., J$. 
### Classification

In a classification problem, we would take the majority vote of the points in region $R_i$.

