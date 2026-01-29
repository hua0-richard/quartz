A GLM is a predictive model where the expected value of a response is a function of linear combination of predictor variables.

These are useful for modelling non-normal outcomes. 

### Key Components
1. Random Component (Distribution)
	- We have some Random Variable $Y$ which could follow a Poisson, Exponential distribution etc.
2. Linear Predictor
	- Suppose $\eta$ is our linear predictor. $\eta = \beta_0 + \beta_1$ as an example. 
3. Link Function. This connects the **mean of the response** to the **linear predictor**. In practice, the Link Function is a mean of the distribution. 
	- $g(\mathbb{E}[Y]) = \eta$ where $\eta$ is our linear predictor. 

GLMs are usually fit using the Maximum Likelihood method.

Refer to [[Generalized Linear Models]] [[Binary Logistic Regression]].

The process is as follows
- We associate each observation with parameters from the distribution
- We determine a link function which associates the parameters and some predictors
- We determine the coefficient values for our link function 
- Typically we would need to express the our link function in terms of the parameters
- We could then simulate the random variables from our parameters (list of parameters) 

> Observations need to be **Independent**

> Fit is typically via Likelihood or `glm(...)` in `R`

