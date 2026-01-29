We have the autoregressive timer series of order 1

$$
Z_n = \phi Z_{n-1} + \epsilon_n
$$
We assume the $\epsilon$ are independent random variables with $\mathbb{E}[X] = 0$ or mean of 0.

We say that this *sequence of* $Z$s is a ***discrete[[The Markov Property | Markov]]*** Process. This is because knowledge of $Z_{n-2}$ and earlier does not provide any information about $Z_n$ if $Z_{n-1}$ is known.

We say that AR(1) or Autoregressive 1 is a Markov Process.

AR(2) would simply be the autoregressive time series with a two step *lag*

$$
Z_n = \phi Z_{n-1} + \phi_2 Z_{n-2} + \epsilon_n
$$
We also refer to this as the second order Markov Process.

This generalizes to AR(p) where we would have $p$ *lags*.






