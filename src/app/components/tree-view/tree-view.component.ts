import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from "primeng/api";
import {DocumentService} from "../../service/document.service";
import {DNode} from "../../model/node";

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  @Input() rootNodeId: number | undefined;
  tree: TreeNode[] | undefined;

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.documentService.getDirectoryTree(this.rootNodeId!).subscribe(data => {
      this.tree = this.documentService.buildTreeComponentData(data);
    });
  }

  selectedNode(node: DNode) {
    console.log("selected " + node.id)
  }

}
