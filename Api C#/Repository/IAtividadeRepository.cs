using System.Collections.Generic;
using System.Threading.Tasks;
using projetoCsharp.Model;

namespace myProject.Repository
{
   public interface IAtividadeRepository
   {
      Task<IEnumerable<Atividade>> GetAtividades();
      Task<Atividade> GetAtividadeById(int id);
      void AddAtividade(Atividade Atividade);
      void AtualizarAtividade(Atividade atividade);
      void DeletarAtividade(Atividade atividade);
      Task<bool> SaveChangesAsync();

   }
}