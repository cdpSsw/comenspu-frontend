import React from "react";

const Modal = ({
  modalID,
  modalHeaderStyle,
  modalTitleStyle,
  modalTitle,
  modalClosedBTNStyle,
  modalContentStyle,
  modalBodyStyle,
  modalBodyContent,
  modalFooterStyle,
  modalFooterContent,
  modalSize
}) => {

  return (
    <div className="modal fade" id={modalID}>
      <article className={`modal-dialog modal-dialog-centered ${modalSize}`}>
        <section className={`modal-content ${modalContentStyle}`}>
          <div className={`modal-header ${modalHeaderStyle}`}>
            <h1 className={modalTitleStyle}>{modalTitle}</h1>
            <button
              className={`btn-close ${modalClosedBTNStyle}`}
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className={`modal-body ${modalBodyStyle}`}>
            {modalBodyContent}
          </div>

          <div className={`modal-footer ${modalFooterStyle}`}>
            {modalFooterContent}
          </div>
        </section>
      </article>
    </div>
  );
};

export default Modal;
