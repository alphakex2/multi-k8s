docker build -t alphakex2/multi-client:latest -t alphakex2/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t alphakex2/multi-server:latest -t alphakex2/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t alphakex2/multi-worker:latest -t alphakex2/multi-worker:$SHA -f ./worker/Dockerfile ./worker
docker push alphakex2/multi-client:latest
docker push alphakex2/multi-server:latest
docker push alphakex2/multi-worker:latest
docker push alphakex2/multi-client:$SHA
docker push alphakex2/multi-server:$SHA
docker push alphakex2/multi-worker:$SHA
kubectl apply -f k8s
kubectl set image deployments/server-deployment server=alphakex2/multi-server:$SHA
kubectl set image deployments/client-deployment client=alphakex2/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=alphakex2/multi-worker:$SHA