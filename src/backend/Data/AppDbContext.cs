using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Project> Projects { get; set; }
    public DbSet<Building> Buildings { get; set; }
}
