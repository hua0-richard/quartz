This is also known as ARMA.

We define as 
$$
Z_n = \phi_1 Z_{n-1} + \theta_1 \epsilon_{n-1} + \epsilon_n
$$
In this case we are taking AR and combining it with MA.

The above is called an ARMA(1,1) with $\mu = 0$.

We can simulate and ARIMA(1,1) process with $\phi_1=0.5$ and $\theta_2=0.7$

```r
arma11 <- arima.sim(1000, model=list(ar=c(.5), ma=c(.7)))
```
