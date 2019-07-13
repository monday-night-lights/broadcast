using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace broadcast
{
	public partial class Draft : Form
	{
		IList<Pick> Picks;

		public Draft()
		{
			InitializeComponent();
			Picks = new List<Pick>();

			listPicks.View = View.Details;
			listPicks.GridLines = false;
			listPicks.Sorting = SortOrder.Descending;
			listPicks.Scrollable = true;

			listPicks.FullRowSelect = true;
			listPicks.Columns.Add("Pick");
			listPicks.Columns.Add("Team");
			listPicks.Columns.Add("Player");
		}

		private void form_Enter(object sender, KeyPressEventArgs e)
		{
			if (e.KeyChar == 13 && !string.IsNullOrEmpty(txtTeam.Text) && !string.IsNullOrEmpty(txtPlayer.Text))
			{
				var newPick = new Pick
				{
					PickNumber = Picks.Any() ? Picks.Select(x => x.PickNumber).Max() + 1 : 1,
					Team = txtTeam.Text,
					Player = txtPlayer.Text
				};

				Picks.Add(newPick);

				listPicks.Items.Add(newPick.PickNumber.ToString()).SubItems.AddRange(new string[]
				{
					newPick.Team,
					newPick.Player
				});

				listPicks.Sort();

				lblPickNumber.Text = "#" + (newPick.PickNumber + 1).ToString();
				txtTeam.Text = string.Empty;
				txtPlayer.Text = string.Empty;
			}
		}
	}
}
