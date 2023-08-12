---
title: 'docker cheatsheet'
description: 'docker cheatsheet'
---

### Commands
```bash
# list all volumes
docker volume ls

# list containers using a volume
docker ps -a --filter volume=VOLUME_NAME_OR_MOUNT_POINT
```

### Cache Mounting
The `--mount=type=cache` flag indicates that a cache mount is being created. A cache mount allows Docker to store and reuse certain files or directories across multiple build stages, which can significantly speed up subsequent builds by avoiding unnecessary re-downloads or recompilations.

It must be noted that, the RUN --mount=type=cache,target=/root/.npm/_cacache command is creating a cache mount inside the container. 
```bash
RUN --mount=type=cache,target=/root/.npm/_cacache
```