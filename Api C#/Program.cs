using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using myProject.Repository;
using projetoCsharp.Database;

var builder = WebApplication.CreateBuilder(args);



var connectionMySql = builder.Configuration
.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<BaseDbContext>(
    options => options.UseMySql(connectionMySql,
    ServerVersion.Parse("8.0.30-mysql"))
);

builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
   app.UseSwagger();
   app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
