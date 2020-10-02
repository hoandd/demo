#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["src/CPW.Web.Public/CPW.Web.Public.csproj", "src/CPW.Web.Public/"]
COPY ["src/CPW.Web.Core/CPW.Web.Core.csproj", "src/CPW.Web.Core/"]
COPY ["src/CPW.Application/CPW.Application.csproj", "src/CPW.Application/"]
COPY ["src/CPW.Application.Shared/CPW.Application.Shared.csproj", "src/CPW.Application.Shared/"]
COPY ["src/CPW.Core.Shared/CPW.Core.Shared.csproj", "src/CPW.Core.Shared/"]
COPY ["src/CPW.Core/CPW.Core.csproj", "src/CPW.Core/"]
COPY ["src/CPW.EntityFrameworkCore/CPW.EntityFrameworkCore.csproj", "src/CPW.EntityFrameworkCore/"]
COPY ["src/CPW.GraphQL/CPW.GraphQL.csproj", "src/CPW.GraphQL/"]
RUN dotnet restore "src/CPW.Web.Public/CPW.Web.Public.csproj"
COPY . .
WORKDIR "/src/src/CPW.Web.Public"
RUN dotnet build "CPW.Web.Public.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CPW.Web.Public.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CPW.Web.Public.dll"]
