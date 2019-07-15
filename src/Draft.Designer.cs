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
            this.teamsListBox = new System.Windows.Forms.ListBox();
            this.draftOrder = new System.Windows.Forms.ListView();
            this.columnHeader1 = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.playersListBox = new System.Windows.Forms.ListBox();
            this.draftButton = new System.Windows.Forms.Button();
            this.ontheclockLabel = new System.Windows.Forms.Label();
            this.pickNumberUp = new System.Windows.Forms.Button();
            this.pickNumberDown = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // teamsListBox
            // 
            this.teamsListBox.FormattingEnabled = true;
            this.teamsListBox.Items.AddRange(new object[] {
            "Americans",
            "Tigers",
            "Mighty Ducks",
            "North Stars",
            "Golden Seals",
            "Whalers",
            "Nordiques"});
            this.teamsListBox.Location = new System.Drawing.Point(12, 51);
            this.teamsListBox.Name = "teamsListBox";
            this.teamsListBox.Size = new System.Drawing.Size(120, 303);
            this.teamsListBox.TabIndex = 4;
            this.teamsListBox.SelectedIndexChanged += new System.EventHandler(this.teamsListBox_SelectedIndexChanged);
            // 
            // draftOrder
            // 
            this.draftOrder.Columns.AddRange(new System.Windows.Forms.ColumnHeader[] {
            this.columnHeader1});
            this.draftOrder.FullRowSelect = true;
            this.draftOrder.Location = new System.Drawing.Point(346, 51);
            this.draftOrder.Name = "draftOrder";
            this.draftOrder.Size = new System.Drawing.Size(306, 303);
            this.draftOrder.TabIndex = 5;
            this.draftOrder.UseCompatibleStateImageBehavior = false;
            this.draftOrder.View = System.Windows.Forms.View.Details;
            // 
            // columnHeader1
            // 
            this.columnHeader1.Text = "Selections";
            this.columnHeader1.Width = 600;
            // 
            // playersListBox
            // 
            this.playersListBox.FormattingEnabled = true;
            this.playersListBox.Location = new System.Drawing.Point(138, 51);
            this.playersListBox.Name = "playersListBox";
            this.playersListBox.Size = new System.Drawing.Size(120, 303);
            this.playersListBox.TabIndex = 6;
            // 
            // draftButton
            // 
            this.draftButton.Location = new System.Drawing.Point(264, 51);
            this.draftButton.Name = "draftButton";
            this.draftButton.Size = new System.Drawing.Size(75, 23);
            this.draftButton.TabIndex = 0;
            this.draftButton.Text = "Draft =>";
            this.draftButton.Click += new System.EventHandler(this.draftButton_Click);
            // 
            // ontheclockLabel
            // 
            this.ontheclockLabel.AutoSize = true;
            this.ontheclockLabel.Location = new System.Drawing.Point(13, 13);
            this.ontheclockLabel.Name = "ontheclockLabel";
            this.ontheclockLabel.Size = new System.Drawing.Size(35, 13);
            this.ontheclockLabel.TabIndex = 7;
            this.ontheclockLabel.Text = "label1";
            // 
            // pickNumberUp
            // 
            this.pickNumberUp.Location = new System.Drawing.Point(265, 156);
            this.pickNumberUp.Name = "pickNumberUp";
            this.pickNumberUp.Size = new System.Drawing.Size(75, 23);
            this.pickNumberUp.TabIndex = 8;
            this.pickNumberUp.Text = "Up";
            this.pickNumberUp.UseVisualStyleBackColor = true;
            this.pickNumberUp.Click += new System.EventHandler(this.pickNumberUp_Click);
            // 
            // pickNumberDown
            // 
            this.pickNumberDown.Location = new System.Drawing.Point(265, 186);
            this.pickNumberDown.Name = "pickNumberDown";
            this.pickNumberDown.Size = new System.Drawing.Size(75, 23);
            this.pickNumberDown.TabIndex = 9;
            this.pickNumberDown.Text = "Down";
            this.pickNumberDown.UseVisualStyleBackColor = true;
            this.pickNumberDown.Click += new System.EventHandler(this.pickNumberDown_Click);
            // 
            // Draft
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(682, 440);
            this.Controls.Add(this.pickNumberDown);
            this.Controls.Add(this.pickNumberUp);
            this.Controls.Add(this.ontheclockLabel);
            this.Controls.Add(this.draftButton);
            this.Controls.Add(this.playersListBox);
            this.Controls.Add(this.draftOrder);
            this.Controls.Add(this.teamsListBox);
            this.Margin = new System.Windows.Forms.Padding(2);
            this.Name = "Draft";
            this.Text = "Draft";
            this.ResumeLayout(false);
            this.PerformLayout();

		}

        #endregion

        private System.Windows.Forms.ListBox teamsListBox;
        private System.Windows.Forms.ListView draftOrder;
        private System.Windows.Forms.ListBox playersListBox;
        private System.Windows.Forms.Button draftButton;
        private System.Windows.Forms.Label ontheclockLabel;
        private System.Windows.Forms.ColumnHeader columnHeader1;
        private System.Windows.Forms.Button pickNumberUp;
        private System.Windows.Forms.Button pickNumberDown;
    }
}