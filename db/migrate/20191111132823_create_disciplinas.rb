class CreateDisciplinas < ActiveRecord::Migration[5.0]
  def change
    create_table :disciplinas do |t|
      t.string :nome
      t.integer :carga

      t.timestamps
    end
  end
end
