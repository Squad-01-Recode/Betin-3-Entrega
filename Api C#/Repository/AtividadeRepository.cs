using projetoCsharp.Database;
using projetoCsharp.Model;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace myProject.Repository
{
   public class AtividadeRepository : IAtividadeRepository
   {
      private readonly TesteBdContext _context;

      public AtividadeRepository(TesteBdContext context)
      {
         _context = context;
      }

      public void AddAtividade(Atividade atividade)
      {
         _context.Add(atividade);
      }

      public void AtualizarAtividade(Atividade atividade)
      {
         _context.Update(atividade);
      }

      public void DeletarAtividade(Atividade atividade)
      {
         _context.Remove(atividade);
      }

      public async Task<Atividade> GetAtividadeById(int id)
      {
         return await _context.Atividades.Where(x => x.Id == id).FirstOrDefaultAsync();
      }

      public async Task<IEnumerable<Atividade>> GetAtividades()
      {
         return await _context.Atividades.ToListAsync();
      }

      public async Task<bool> SaveChangesAsync()
      {
         return await _context.SaveChangesAsync() > 0;
      }
   }
}