/**
 * A Custom log function
 * @param {any} args array containing multiple value
 *
 * @returns undefined
 */
export const log = (...args: any) => {
  if (process.env.NODE_ENV === 'production') return;

  const callerModuleName = new Error()?.stack
    ?.split('\n')[2]
    .trim()
    .split(' ')[1];

  console.log(`[${callerModuleName}]: `, ...args);
};
