### Steps
1. Exclude each observation from the dataset
2. Compute the estimated parameter with remaining data
3. Aggregate estimates

### Example
Suppose we have $x_1, x_2, ... , x_n$ and we wish to compute $\hat{\alpha}$ from some parameter $\alpha$.

We might also like to know the bias and variance of $\alpha$ 

To do so, we could use the Jackknife method.

Suppose we have observations $o_1, o_2, ... ,o_n$ and $i \in 1 ... n$

For each $i$ we remove the $o_i$ and compute $\hat{\alpha}$. 

At the end of this process we will have $n$ estimates for $\alpha$

The Jackknife method will produce the following expressions for [[Standard Error]] and [[Concepts/Core/Math/Statistics/Regression/Bias|Bias]]

The **estimate** of the Standard Error of $\hat{\alpha}$ is mean squared error of all each estimate less the average value of the estimates multiplied by $n - 1$. 

$$\hat{\text{SE}} = \sqrt{\frac{n-1}{n}\sum^{n}_{i=1}(\hat{\alpha_i} - \bar{\hat{\alpha}})^2}$$
Note that we can show that Jackknife estimators are unbiased.