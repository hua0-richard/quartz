This is also known as ARIMA.

We define as follows
$$
X_n = X_{n-1}+Z_n 
$$
$$
Z_n = \phi Z_{n-1}+\theta_1\epsilon_{n-1}+\epsilon_n
$$
This is where $\epsilon$ are normally distributed and this process has a mean of 0. It has a variance of $\sigma^2$ and $\theta_2$ and $\theta_1$ are constant.

We day an ARIMA(1,1,1) process with a drift $\mu$ is $X_n = X_{n-1} + Y_n$ where $Y_n = Z_n +\mu$.

Here we are simulating an ARMA(1,1,1) process with $\phi_1 = 0.5$ and $\theta_2 = 0.7$.
```r
arima11 <- arima.sim(1000, model=list(order=c(1, 1, 1),ar=c(.5), ma=c(.7)))
ts.plot(arima11)
```
Pasted image 20260126195708.png
Differencing is used to remove trends and transform a non-stationary series into a stationary one.

We use ARIMA(p, 1, q) as an example.

Suppose $Z_n$ follows ARIMA(p, 1, q), them $Y_n = Z_n - Z_{n-1}$ will be a 0-mean ARIMA(p, q) process.

```r
Y <- diff(arima11)
ts.plot(Y)
```
