async function postFunk(task, project, date, pool) {
  return await pool.query(
    'INSERT INTO todotable (task, project, date) VALUES ($1, $2, $3) RETURNING id, task, project, date',
    [task, project, date]
  );
}

async function getFunk(pool) {
  return await pool.query('SELECT * FROM todotable');
}

async function deleteFunk(id, pool) {
  return await pool.query('DELETE FROM todotable WHERE id = $1', [id]);
}

module.exports = { postFunk, getFunk, deleteFunk };
