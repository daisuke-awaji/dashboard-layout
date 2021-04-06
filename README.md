# dahsboard layout for react

![image](https://user-images.githubusercontent.com/20736455/111234653-5e173c80-8632-11eb-8572-e31958c3d368.png)

# generate frontend api client

docker run --rm -v $(pwd):/local openapitools/openapi-generator-cli generate -i /local/spec.yaml -g typescript-axios -o /src/axios/petstore
