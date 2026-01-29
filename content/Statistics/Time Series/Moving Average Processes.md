In the Moving Average process, the data points are all dependent on each other. This is *unlike* the [[Autoregressive Time Series]] or [[The Markov Property]].

We define MA(1) as the 0-mean moving average process of order 1
$$
Z_n = \theta_1\epsilon_{n - 1} + \epsilon_n
$$
- We say $\epsilon$ - s are independent and normally distributed with mean of 0 and variance $\sigma^2$ 
- $\theta_1$ is a constant

Any $\epsilon_k$ will be independent of some $Z_j$ for $j \lt k$

We define MA(1) with $\mu$-mean moving average process of order 1
$$
Y_n = Z_n + \mu
$$
Since $\epsilon$ s have mean of 0, $\mathbb{E}[Z_n] = 0$. 
> This is because $\epsilon$ s are the only random variable

We can show that $Z_n$ depends on all previous $Z$s. Note that this is a contradiction of the Markov Property.

We can show that for an MA(1) Process, the first lag autocovariance is $\text{Cov}(Z_nZ_{n-1)}=\theta\sigma^2$. For terms after this, we can show that the autocovariance is 0.

The $kth$ **autocorrelation** is defined as the $kth$ auto covariance divided by the variance of the process. 

Simulating 1000 observations from MA(1) with $\theta_1 = 0.9$

```r
ma1 <- arima.sim(1000, model=list(ma=c(.9)))
acf(ma1)
```
Given a time series plot and asked to determine whether the plot s [[Autoregressive Time Series|AR(1)]] or MA(1) we can determine based on the sample `acf` function. If the `acf` function cuts off after lag 1 we have MA(1). If they decay exponentially then we have an AR(1).

