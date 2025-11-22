Combines multiple models on random subsets of data to to reduce variance. 
Bagging is a type of [[Ensemble Methods|Ensemble Method]].

Bagging, also known as Bootstrap Aggregating, combines multiple models trained on different [[Bootstrap]] samples.

Typically [[Classification and Regression Trees (CART) |CART]] methods (Trees) tend to over fit, bagging is used to reduce variance.

### Approach

1. We generate $B$ bootstrapped samples
2. Train the $B$ models which we denote as $\hat{f}^{*b}$ 
3. Aggregate predictions. In the case of [[Simple Linear Regression |regression]], we use the average prediction. In [[Classification|classification]] we would use the majority vote of the trees. 

$$ \hat{f}_{\text{bag}}(x) = \frac{\sum^B_{b=1}f^{*b}(x^*_b)}{B}$$



