using Microsoft.EntityFrameworkCore;
using projetoCsharp.Model;


namespace projetoCsharp.Database
{
   public class TesteBdContext : DbContext
   {
      public TesteBdContext(DbContextOptions<TesteBdContext>
      options) : base(options)
      {

      }

      public DbSet<Atividade> Atividades { get; set; }

      protected override void OnModelCreating(ModelBuilder modelBuilder)
      {
         var atividade = modelBuilder.Entity<Atividade>();
         atividade.ToTable("atividade");
         atividade.HasKey(x => x.Id);
         atividade.Property(x => x.Id).HasColumnName("id_atividade").ValueGeneratedOnAdd();
         atividade.Property(x => x.Conteudo).HasColumnName("conteudo_atividade").IsRequired();
         atividade.Property(x => x.Info).HasColumnName("info_atividade").IsRequired();
         atividade.Property(x => x.Titulo).HasColumnName("titulo_atividade").IsRequired();

      }
   }
}