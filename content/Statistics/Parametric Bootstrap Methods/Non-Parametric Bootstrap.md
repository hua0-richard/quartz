Refer to [[Concepts/Core/Machine Learning/Resampling & Regularization/Bootstrap|Bootstrap]]

We perform the non-parametric bootstrap

```r
x.nonparbs1 <- sample(x, size=10, replace=TRUE)

mean(x.nonparbs1, trim=.2)

x.nonparbs10000 <- replicate(10000,

mean(sample(x, size=10, replace=TRUE), trim=.2))

sd(x.nonparbs10000)
```
In this case, the outliers can appear several times in the resample meaning that the standard error could be inflated.

Recall $\bar{X} = \frac{\sigma}{\sqrt{n}}$
