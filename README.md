# err-test

Test fixtures for ZopDay deploy error messages. Each branch is one deploy case:
a working baseline, or a deliberate failure the deployer should name clearly.

| Branch | App | Expected |
|---|---|---|
| `main` | Node.js HTTP server | builds and goes live |
| `react-compile-error` | React + Vite + TypeScript with a type error | `BUILD_COMPILE_FAILED` |
| `node-bad-dependency` | Node, depends on a package that doesn't exist | `BUILD_DEPENDENCY_FAILED` |
| `node-lockfile-stale` | Node, `npm ci` against a stale lockfile | `BUILD_LOCKFILE_STALE` |
| `python-bad-requirement` | Python, `requirements.txt` names a missing package | `BUILD_DEPENDENCY_FAILED` |
| `dockerfile-invalid` | Dockerfile with an unknown instruction | `BUILD_DOCKERFILE_INVALID` |
| `dockerfile-copy-missing` | Dockerfile `COPY`s a file that isn't committed | `BUILD_CONTEXT_FILE_MISSING` |
| `dockerfile-step-fails` | A `RUN` script that exits 1 | `BUILD_STEP_FAILED` |
| `monorepo` | App under `services/api` | live with root path `services/api`; `BUILD_ROOT_PATH_NOT_FOUND` with `services/web` |
| `branch-to-delete` | Deleted after its service is created | `BUILD_BRANCH_NOT_FOUND` |
