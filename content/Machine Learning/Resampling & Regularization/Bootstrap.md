Repeatedly sample from the dataset with replacement. The Bootstrap method can handle more complex scenarios than the Jackknife method. It also provides more flexibility in constructing confidence intervals.

### Steps
1. We take a random sample of size $n$ from the original data set with replacement ($n$ is usually also the size of the original dataset).
2. From this sample, calculate the value of the estimator. 

### Standard Error of the Estimator
$$\hat{\text{SE}}(\hat{\alpha}) = \sqrt{\frac{\sum_{i = 1}^{B}(\hat{\alpha}^{*i} - \bar{\hat{\alpha}})^2}{B - 1}}$$
The Standard Error of $\hat{\alpha}$ is the square root of the sum of square differences of $\alpha$ from each bootstrap sample and the average of $\alpha$ over all bootstrap samples divided by the number of samples less one.

### Bias of the Estimator
$$\hat{\text{Bias}}(\hat{\alpha}) = \bar{\hat{\alpha}} - \hat{\alpha_f}$$
This Bias of the estimator is the average of the estimator across all bootstrap samples less the estimate from the original data set.