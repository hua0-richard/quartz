We use Bootstrap to construct [[Confidence Intervals]] for parameters in intractable models.

In a typical problem we would estimate $\theta$ of a population using a sample from which we derive $\hat{\theta}$.

Typically, we would like to know how wrong $\hat{\theta}$ is. To do so, we would usually assess the variability of $\hat{\theta}$.

Refer to [[Trimmed Mean]].

Finding the standard error estimate for the Trimmed Mean is not straight forward.

Standard Error of a sample is $\bar{X} = \frac{\sigma}{\sqrt{n}}$

Suppose we have some data which originate from a Normal distribution.

We have our trimmed mean as $84.7$ and our estimated standard deviation as $6.86$.

```r
x <- c(78, 86, 92, 81, 3, 89, 94, 88, 79, 85)
x.tmean <- mean(x, trim=.2)
diff(quantile(x, c(.25, .75)))/1.349
```
We repeatedly simulate this distribution and compute the trimmed mean.

We then use the collection of trimmed means to estimate the standard deviation of the trimmed means for the population.

We perform the simulation
```r
set.seed(1038087)
x1 <- rnorm(10, mean=x.tmean, sd=6.86)
x1trim <- mean(x1, trim=.2)
```
We now simulate 10000 samples
```r
x10000 <- replicate(10000,
mean(rnorm(10, mean=x.tmean, sd=6.86), trim=.2))
sd(x10000)
```
What we have done is effectively setup the distribution parameters and repeatedly sampled from the distribution we have created. This is the essence of the parametric bootstrap.





