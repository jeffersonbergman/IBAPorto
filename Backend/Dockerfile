# Usar uma imagem base do .NET 8.0 para build e runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Imagem base para o build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["Backend.csproj", "./"]
RUN dotnet restore "./Backend.csproj"
COPY . .
WORKDIR "/src"
RUN dotnet build "./Backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "./Backend.csproj" -c Release -o /app/publish

# Final stage: run the app
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Backend.dll"]
