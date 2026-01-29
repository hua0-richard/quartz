We set $p$ to be the number of predictors and $n$ to be the number of observations.

>[!tip] We use Regularization when $p$ > $n$

With $p$ < $n$ [[LASSO]] is still quite popular. This is because LASSO is able to fit a linear model and simultaneously perform feature selection.

>[!tip] We use Regularization when there is [[Multicollinearity]]

[[Ridge Regression]] and [[LASSO]] can help reduce the variance of the model and simultaneously shrink the coefficients of the model.

To choose a $\lambda$ in either Ridge or Lasso, we can perform [[Cross Validation]] to select the ideal $\lambda$.

