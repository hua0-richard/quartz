Combines multiple models on random subsets of data to to reduce variance. 
Bagging is a type of [[Ensemble Methods|Ensemble Method]].

Bagging, also known as *Bootstrap Aggregating*, combines multiple models trained on different [[Bootstrap]] samples.

These models can be trained in parallel since they are independent of one another. 

Typically [[Classification and Regression Trees (CART) |CART]] methods (Trees) tend to over fit, bagging is used to reduce variance.

### Approach

1. We generate $B$ [[Bootstrap|bootsrapped]] samples
2. Train the $B$ models which we denote as $\hat{f}^{*b}$ 
3. Aggregate predictions. In the case of [[Simple Linear Regression |regression]], we use the average prediction. In [[Classification|classification]] we would use the majority vote of the trees. 

$$ \hat{f}_{\text{bag}}(x) = \frac{\sum^B_{b=1}f^{*b}(x^*_b)}{B}$$
We typically *do not* prune trees in Bagging. Therefore, each tree will have high variance and low bias. 

>[!note] We should use $B = 100$ as a sufficient amount. However $B =500$ is the default parameter for some packages.


### Assessment

We have that, on average, about $\frac{1}{3}$ of the observations from each sample will not appear. The observations do not appear are referred to as [[Out of Bag]] observations.

We use these [[Out of Bag]] observations as a [[Concepts/Core/Machine Learning/Resampling & Regularization/Validation Set|Validation Set]] and we use our fitted model on these Out of Bag observations.


