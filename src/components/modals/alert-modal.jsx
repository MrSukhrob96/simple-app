import React from "react";

const AlertModal = () => {
    return (
        <div className="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="deleteLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content p-3">
                    <div className="modal-header border-white">
                        <h5 className="modal-title font-italic" id="deleteLabel">MODAL</h5>
                        <button type="button" className="btn close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi repellendus eligendi pariatur ratione magnam recusandae? Provident aliquam exercitationem accusantium?
                    </div>
                    <div className="modal-footer border-white">
                        <button type="button" className="btn btn-dark px-4 input_border mr-2" data-dismiss="modal">Нет</button>
                        <button type="button" className="btn btn-outline-dark px-4 input_border">Да</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertModal;