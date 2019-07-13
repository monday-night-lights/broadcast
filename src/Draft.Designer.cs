namespace broadcast
{
	partial class Draft
	{
		/// <summary>
		/// Required designer variable.
		/// </summary>
		private System.ComponentModel.IContainer components = null;

		/// <summary>
		/// Clean up any resources being used.
		/// </summary>
		/// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
		protected override void Dispose(bool disposing)
		{
			if (disposing && (components != null))
			{
				components.Dispose();
			}
			base.Dispose(disposing);
		}

		#region Windows Form Designer generated code

		/// <summary>
		/// Required method for Designer support - do not modify
		/// the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{
			this.lblPickNumber = new System.Windows.Forms.Label();
			this.txtTeam = new System.Windows.Forms.TextBox();
			this.txtPlayer = new System.Windows.Forms.TextBox();
			this.listPicks = new System.Windows.Forms.ListView();
			this.SuspendLayout();
			// 
			// lblPickNumber
			// 
			this.lblPickNumber.AutoSize = true;
			this.lblPickNumber.Location = new System.Drawing.Point(24, 54);
			this.lblPickNumber.Name = "lblPickNumber";
			this.lblPickNumber.Size = new System.Drawing.Size(24, 17);
			this.lblPickNumber.TabIndex = 0;
			this.lblPickNumber.Text = "#1";
			// 
			// txtTeam
			// 
			this.txtTeam.AutoCompleteCustomSource.AddRange(new string[] {
            "Americans",
            "Golden Seals",
            "Mighty Ducks",
            "Nordiques",
            "North stars",
            "Tigers",
            "Whalers"});
			this.txtTeam.AutoCompleteMode = System.Windows.Forms.AutoCompleteMode.SuggestAppend;
			this.txtTeam.AutoCompleteSource = System.Windows.Forms.AutoCompleteSource.CustomSource;
			this.txtTeam.Location = new System.Drawing.Point(54, 51);
			this.txtTeam.Name = "txtTeam";
			this.txtTeam.Size = new System.Drawing.Size(100, 22);
			this.txtTeam.TabIndex = 1;
			this.txtTeam.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.form_Enter);
			// 
			// txtPlayer
			// 
			this.txtPlayer.AutoCompleteCustomSource.AddRange(new string[] {
            "Jermey",
            "Charles",
            "Sam",
            "Adam",
            "Justin"});
			this.txtPlayer.AutoCompleteMode = System.Windows.Forms.AutoCompleteMode.SuggestAppend;
			this.txtPlayer.AutoCompleteSource = System.Windows.Forms.AutoCompleteSource.CustomSource;
			this.txtPlayer.Location = new System.Drawing.Point(160, 51);
			this.txtPlayer.Name = "txtPlayer";
			this.txtPlayer.Size = new System.Drawing.Size(124, 22);
			this.txtPlayer.TabIndex = 2;
			this.txtPlayer.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.form_Enter);
			// 
			// listPicks
			// 
			this.listPicks.Location = new System.Drawing.Point(27, 103);
			this.listPicks.Name = "listPicks";
			this.listPicks.Size = new System.Drawing.Size(257, 417);
			this.listPicks.TabIndex = 3;
			this.listPicks.UseCompatibleStateImageBehavior = false;
			this.listPicks.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.form_Enter);
			// 
			// Draft
			// 
			this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
			this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
			this.ClientSize = new System.Drawing.Size(310, 542);
			this.Controls.Add(this.listPicks);
			this.Controls.Add(this.txtPlayer);
			this.Controls.Add(this.txtTeam);
			this.Controls.Add(this.lblPickNumber);
			this.Name = "Draft";
			this.Text = "Draft";
			this.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.form_Enter);
			this.ResumeLayout(false);
			this.PerformLayout();

		}

		#endregion

		private System.Windows.Forms.Label lblPickNumber;
		private System.Windows.Forms.TextBox txtTeam;
		private System.Windows.Forms.TextBox txtPlayer;
		private System.Windows.Forms.ListView listPicks;
	}
}