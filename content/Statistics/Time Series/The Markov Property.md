For a sequence of Random Variables $Z_1, Z_2, ..., Z_n$ where each random variable is independent, we can write their joint distribution as follows 

$$f(z_1, z_2, ... ,z_n) = f(z_1)f(z_2)...f(z_n)$$
However, if the sequence of Random Variables is completely dependent, we will need to write the conditional probability of each $Z_i$ ad a condition probability of all other $Z_j$ such that $i \neq j$ and $j < i$ for some fixed $i$ and $j \in 1 ... i - 1$ .

$$
f(z_1, z_2, \ldots, z_n)
= f(z_n \mid z_1, z_2, \ldots, z_{n-1})
  f(z_{n-1} \mid z_1, \ldots, z_{n-2})
  \cdots
  f(z_4 \mid z_1, z_2, z_3)
  f(z_3 \mid z_1, z_2)
  f(z_2 \mid z_1)
  f(z_1).

$$

What if each random variable is only dependent on the previous random variable in the sequence? This is the Markov Property.

>[!tip] Markov Property
$$
f(z_1, z_2, \ldots, z_n)
= f(z_n \mid z_{n-1})\, f(z_{n-1} \mid z_{n-2}) \cdots
f(z_4 \mid z_3)\, f(z_3 \mid z_2)\, f(z_2 \mid z_1)\, f(z_1).
$$

