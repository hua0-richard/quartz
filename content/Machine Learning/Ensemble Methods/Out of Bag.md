Observations not included in the [[Bootstrap |bootstrap]] sample during [[Bagging|bagging]] are called **Out of Bag** observations.

We can use the Out off Bag observations in a similar way to how [[Validation Set |validation]] sets are used during [[Cross Validation |cross validation]].

We can make predictions for $x_i$ where $x_i$ some data point in the Out of Bag set.

How many data points will not be selected at each point during bagging?

1. $P(x_i \text{not selected in bootstrap sample})$
2. $P(x_i \text{not selected in first draw}) \times ... \times P(x_i \text{not selected in nth draw})$
3. 

In Regression, average the predicted value across all models in ensemble.
In Classification, we take the majority vote.

### Key Ideas
1. Out of Bag Estimate is an efficient and reliable alternative to cross-validation