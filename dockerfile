docker run \
  --volume=/var/lib/drone:/data \
  --env=DRONE_GITHUB_CLIENT_ID={{bb6db0e782cc494c13dc}} \
  --env=DRONE_GITHUB_CLIENT_SECRET={{bb61c6a5753c1bf2e16370e50c9e4dfd6d2fed95}} \
  --env=DRONE_RPC_SECRET={{a31e71f6ccf1cf9768e7fde913778f01}} \
  --env=DRONE_SERVER_HOST={{116.62.165.137}} \
  --env=DRONE_SERVER_PROTO={{http}} \
  --publish=80:80 \
  --publish=443:443 \
  --restart=always \
  --detach=true \
  --name=drone \
  drone/drone:1


  docker run -d \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -e DRONE_RPC_PROTO=http \
  -e DRONE_RPC_HOST=116.62.165.137 \
  -e DRONE_RPC_SECRET=a31e71f6ccf1cf9768e7fde913778f01 \
  -e DRONE_RUNNER_CAPACITY=2 \
  -e DRONE_RUNNER_NAME=test \
  -p 3000:3000 \
  --restart always \
  --name runner \
  drone/drone-runner-docker:1