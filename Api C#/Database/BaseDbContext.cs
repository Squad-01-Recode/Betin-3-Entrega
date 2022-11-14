using Microsoft.EntityFrameworkCore;
using projetoCsharp.Model;


namespace projetoCsharp.Database
{
   public class BaseDbContext : DbContext
   {
      public BaseDbContext(DbContextOptions<BaseDbContext>
      options) : base(options)
      {

      }


      public DbSet<Usuario> Usuarios { get; set; }

      protected override void OnModelCreating(ModelBuilder modelBuilder)
      {
         var usuario = modelBuilder.Entity<Usuario>();
         usuario.ToTable("usuario");
         usuario.HasKey(x => x.Id);
         usuario.Property(x => x.Id).HasColumnName("id").ValueGeneratedOnAdd();
         usuario.Property(x => x.Email).HasColumnName("email").IsRequired();
         usuario.Property(x => x.Nome).HasColumnName("nome").IsRequired();
         usuario.Property(x => x.Senha).HasColumnName("senha").IsRequired();
         usuario.Property(x => x.Idade).HasColumnName("idade").IsRequired();


      }


   }



}