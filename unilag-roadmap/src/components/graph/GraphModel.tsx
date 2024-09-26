type Result = {
  distances: { [key: string]: number };
  previous: { [key: string]: string | null };
};

const graphModel = (graph: { [key: string]: { [key: string]: number } }, start: string, _end: string): Result => {
  const queue: [number, string][] = [];
  queue.push([0, start]);

  const distances: { [key: string]: number } = {};
  for (const location in graph) {
    distances[location] = Infinity;
  }
  distances[start] = 0;

  const previous: { [key: string]: string | null } = {};
  for (const location in graph) {
    previous[location] = null;
  }

  while (queue.length > 0) {
    const [currentDistance, currentLocation] = queue.shift()!;

    if (currentDistance > distances[currentLocation]) {
      continue;
    }

    for (const neighbor in graph[currentLocation]) {
      const weight = graph[currentLocation][neighbor];
      const distance = currentDistance + weight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentLocation;
        queue.push([distance, neighbor]);
        queue.sort((a, b) => a[0] - b[0]); // Sort by distance for priority queue behavior
      }
    }
  }

  return { distances, previous };
};

export default graphModel;
