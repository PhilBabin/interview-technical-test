using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models;

[Table("Building")]
public class Building
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("height")]
    public decimal Height { get; set; }

    [Column("width")]
    public decimal Width { get; set; }

    [Column("length")]
    public decimal Length { get; set; }

    [Column("color")]
    public string? Color { get; set; }

    [Column("shape")]
    public string? Shape { get; set; }

    [Column("gps_position")]
    public string? GpsPosition { get; set; }
}
