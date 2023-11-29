export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const func = mathFunction();
    queue.push(func);
  } catch (error) {
    queue.push(error.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
