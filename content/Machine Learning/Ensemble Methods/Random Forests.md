Random Forests are a type of [[Bagging]] technique.

Random Forests builds a number of trees on a [[Bootstrap|bootstrapped]] sample. At each split in the tree, only a subset *random sample* of m predictors are considered.

By default for [[Classification]] we use $m = \sqrt{p}$ and for [[Regression]] we use $m = p/3$ where $m$ is the number of predictors.

### Method
1. Create $B$ bootstrap samples.
2. Fit a tree to each bootstrap sample while considering only a random subset of $m$ features for each split.
3. Each decision tree is used to make a prediction.
4. Aggregate all $B$ predictions.
