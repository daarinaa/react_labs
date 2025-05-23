using BookStore.Application.Services;
using BookStore.DataAccess;
using BookStore.DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<BookStoreDbContext>(
    options =>
    {
        options.UseSqlServer(builder.Configuration.GetConnectionString(nameof(BookStoreDbContext)));
    });

builder.Services.AddScoped<IBooksService, BooksService>();
builder.Services.AddScoped<IBooksRepository, BooksRepository>();

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
