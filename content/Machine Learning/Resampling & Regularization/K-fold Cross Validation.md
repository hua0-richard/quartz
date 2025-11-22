### Overview
1. Split data into $k$ folds
2. Train on the remaining $k - 1$ folds
3. Repeat $k$ times and average loss

### Steps
Divide dataset into *equal* $k$ subsets. We call these subsets folds.

We choose a fold to use as the [[Validation Set |validation set]] and use the remaining folds as the [[Train Set|training set]]. The loss is measured on the validation set and is recorded as $\text{Perf}_1$.

We choose the next fold and record the loss as $\text{Perf}_2$.

We repeat this process for all $k$ folds and we have performance results $\text{Perf}_i$ for $i \in 1...k$.

Finally, we do $\frac{1}{k}\sum{\text{Perf}_i}$ 








