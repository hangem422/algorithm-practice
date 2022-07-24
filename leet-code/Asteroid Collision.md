# Asteroid Collision

[LeetCode 문제 링크](https://leetcode.com/problems/asteroid-collision)

```javascript
function asteroidCollision(asteroids: number[]): number[] {
  let leftAsteroidStack: readonly number[] = [];
  let rightAsteroidStack: readonly number[] = [];

  asteroids.forEach((asteroid) => {
    const [nextLeftStack, nextRightStack] = calcNextStacks(asteroid, leftAsteroidStack, rightAsteroidStack);
    leftAsteroidStack = nextLeftStack;
    rightAsteroidStack = nextRightStack;
  });

  return [...leftAsteroidStack, ...rightAsteroidStack];
}

function calcNextStacks(
  asteroid: number,
  leftStack: readonly number[],
  rightStack: readonly number[]
): [readonly number[], readonly number[]] {
  const addedRightStack = addAsteroidInStack(rightStack, asteroid, isRightAsteroid);
  const [explodedRightStack, isAsteroidExplode] = explodeAsteroidsOfStack(addedRightStack, asteroid);
  const addedLeftStack = addAsteroidInStack(leftStack, asteroid, (target) => {
    return isLeftAsteroid(target) && !isAsteroidExplode;
  });

  return [addedLeftStack, explodedRightStack];
}

function isRightAsteroid(asteroid: number) {
  return asteroid > 0;
}

function isLeftAsteroid(asteroid: number) {
  return asteroid < 0;
}

function addAsteroidInStack(
  stack: readonly number[],
  asteroid: number,
  validate: (asteroid: number) => boolean
): readonly number[] {
  const nextStack: number[] = [...stack];
  if (validate(asteroid)) {
    nextStack.push(asteroid);
  }

  return nextStack;
}

function explodeAsteroidsOfStack(stack: readonly number[], asteroid: number): [readonly number[], boolean] {
  const nextStack = [...stack];
  let isAsteroidExplode = false;

  while (nextStack.length > 0 && !isAsteroidExplode) {
    const last = nextStack[nextStack.length - 1];
    isAsteroidExplode = isExplode(asteroid, last);
    if (isExplode(last, asteroid)) {
      nextStack.pop();
    } else {
      break;
    }
  }

  return [nextStack, isAsteroidExplode];
}

function isExplode(base: number, target: number = base): boolean {
  const diff = base + target;
  return diff * base <= 0;
}
```
