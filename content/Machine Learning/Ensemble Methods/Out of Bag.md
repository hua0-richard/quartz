Observations not included in the [[Bootstrap |bootstrap]] sample during [[Bagging|bagging]] are called **Out of Bag** observations.

We can use the Out off Bag observations in a similar way to how [[Validation Set |validation]] sets are used during [[Cross Validation |cross validation]].

We can make predictions for $x_i$ where $x_i$ some data point in the Out of Bag set.

How many data points will not be selected at each point during bagging?

1. $P(x_i \text{not selected in bootstrap sample})$
2. $P(x_i \text{not selected in first draw}) \times ... \times P(x_i \text{not selected in nth draw})$
3. $$\frac{n - 1}{n}\times .. \times \frac{n-1}{n} = \frac{(n-1)^n}{n^n} = (\frac{n - 1}{n})^n = (\frac{n}{n}-\frac{1}{n})^n = (1- \frac{1}{n})^n$$
4. $\lim_{n \to \infty}(1-\frac{1}{n})^n = \frac{1}{e} \approx \frac{1}{3}$ 

We can see here that approximately $\frac{1}{3}$ of the values *will not* be selected for very large values of $n$ in [[Bootstrap|bootstrapping]]. 

In Regression, average the predicted value across all models in ensemble.
In Classification, we take the majority vote.

### Key Ideas
1. Out of Bag Estimate is an efficient and reliable alternative to cross-validation
2. We use make predictions on the Out of Bag observations. See [[Out of Bag Observations]]